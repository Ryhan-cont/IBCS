<template>
    <div>
        <div class="d-block" v-if="bankExist">
            <b-row>
                <b-col lg="6" md="6" sm="6"> 
                    <div style="font-size:20px" class="font-weight-bold">Balance: {{bankInfo.currentBalance}}</div>
                </b-col>
                <b-col lg="6" md="6" sm="6">
                    <div class="d-flex">
                        <div class="col"></div>
                        <div>
                            <b-button variant="primary" v-b-modal.request-payment>Request money from bank</b-button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div v-else>
            <div class="col"></div>
            <div>
                <b-button variant="primary" @click="$router.push('/manage-bank')">Create bank account</b-button>
            </div>
        </div>
        <div class="pt-3">
            <div class="page--subtitle">
                <div>Pending Paymeny</div>
            </div>
            <div>
                <div v-for="(item, index) in paymnetPending" :key="index" class="d-flex p-2 mt-2" style="background-color:rgb(0,0,0,.05)">
                    <div style="width:50px; align-self:center" class="px-1">{{index+1}}</div>
                    <div class="col">
                        <div>Recipient: {{item.userName}} </div>
                        <div>Requested at: {{item.requestedAt}}</div>
                        <div>Grade: {{item.salary.grade}}</div>
                        <div>basic: {{item.salary.basic}} / House rent: {{item.salary.houseRent}} / Medical allowance: {{item.salary.medicalAllowance}} / Total: {{item.salary.total}}</div>
                    </div>
                    <div style="align-self:center">
                        <b-button variant="primary" size="sm" @click="print(item)">Print</b-button>
                        <b-button variant="primary" size="sm" @click="pay(item.paymentId)">Pay</b-button>
                    </div>
                </div>
            </div>
            <div class="page--subtitle">
                <div>Accepted Paymeny</div>
            </div>
            <div>
                <div v-for="(item, index) in paymentAccepted" :key="index" class="d-flex p-2 mt-2" style="background-color:rgb(0,0,0,.05)">
                    <div style="width:50px; align-self:center" class="px-1">{{index+1}}</div>
                    <div class="col">
                        <div>Recipient: {{item.userName}} </div>
                        <div>Requested at: {{item.requestedAt}}</div>
                        <div>Grade: {{item.salary.grade}}</div>
                        <div>basic: {{item.salary.basic}} / House rent: {{item.salary.houseRent}} / Medical allowance: {{item.salary.medicalAllowance}} / Total: {{item.salary.total}}</div>
                    </div>
                    <div style="align-self:center">
                        <b-button variant="primary" size="sm" @click="print(item)">Print</b-button>
                    </div>
                </div>
            </div>
        </div>
        <b-modal id="request-payment" hide-footer centered title="Request balance from bank">
            <div class="d-flex">
                <div class="col">
                    <div class="form--input-container">
                        <b-form-input v-model="requestBalance" placeholder="Request balance"></b-form-input>
                        <div class="form--error-msg"><div v-if="errorData.requestBalance">{{errorData.requestBalance[0]}}</div></div>
                    </div>
                </div>
                <div class="pl-2" style="padding-top:5px">
                    <b-button @click="requestBankBalance()" variant="primary">Save</b-button>
                </div>
            </div>
        </b-modal>
        <div ref="printhtml" style="display:none">
            <div>Recipient: {{printItem.userName}} </div>
            <div>Requested at: {{printItem.requestedAt}}</div>
            <div>Grade: {{printItem.salary.grade}}</div>
            <div>basic: {{printItem.salary.basic}} / House rent: {{printItem.salary.houseRent}} / Medical allowance: {{printItem.salary.medicalAllowance}} / Total: {{printItem.salary.total}}</div>
            <div>Status: {{printItem.status}} </div>
        </div>
        <iframe name="frame" id="print-frame" style="display:none"></iframe>
        <input type="button" ref="printBtn" onclick="frames['frame'].print()" style="display:none">
    </div>
</template>

<script>
export default {
    data(){
        return{
            requestBalance:null,

            bankExist:false,
            bankInfo:[],
            paymnetPending:[],
            paymentAccepted:[],
            user:[],

            printItem:{salary:{}},
        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        async loadData(){
            try{
                var req = await axios.get('/api/dashboard/detail')
                this.bankInfo = req.data.bank;
                this.paymnetPending = req.data.paymentPending;
                this.paymentAccepted = req.data.paymentAccepted;
                this.user = req.data.user;
                this.bankExist = req.data.bankExist;
            }catch(err){
                if(err.response){this.notificationAlert(err.response)}
                console.log(err)
            }
        },
        async requestBankBalance(){
            this.errorData={};
            try{
                var data = {
                    requestBalance:this.requestBalance,
                }
                var req = await axios.post('/api/bank/request-balance-from-bank',data)
                if(req.status == 200){
                    als.fire({title: 'balance updated successfully.',});
                    this.loadData();
                }

            }catch(err){
                if(err.response){this.notificationAlert(err.response)}
            }
        },
        async pay(id){
            this.errorData={};
            try{
                var req = await axios.put('/api/payment/update/'+id)
                if(req.status == 200){
                    als.fire({title: 'Paid successfully.',});
                    this.loadData();
                }

            }catch(err){
                if(err.response){this.notificationAlert(err.response)}
                console.log(err)
            }
        },
        print(item){
            this.printItem = item;
            setTimeout(function(){ 
                var doc = document.getElementById('print-frame').contentWindow.document;
                doc.open();
                doc.write(this.$refs.printhtml.innerHTML);
                doc.close();
                this.$refs.printBtn.click();
            }.bind(this), 1000);
        }
    }

}
</script>