<template >
    <div class="page--layout">
        <div class="page--title">
            <div>Menage Account</div>
            <div class="col"></div>
            <div>
                <b-button variant="primary" @click="editMode = !editMode">{{editModeName}}</b-button>
            </div>
        </div>
        <div v-if="editMode">
            <b-container>
                <b-row>
                    <b-col lg="4" md="6" sm="12">
                        <div class="form--input-container">
                            <div class="form--input-label">Bank Name</div>
                            <b-form-input v-model="bankName" placeholder="Bank Name"></b-form-input>
                            <div class="form--error-msg"><div v-if="errorData.bankName">{{errorData.bankName[0]}}</div></div>
                        </div>
                    </b-col>
                    <b-col lg="4" md="6" sm="12">
                        <div class="form--input-container">
                            <div class="form--input-label">Branch Name</div>
                            <b-form-input v-model="branchName" placeholder="Branch Name"></b-form-input>
                            <div class="form--error-msg"><div v-if="errorData.branchName">{{errorData.branchName[0]}}</div></div>
                        </div>              
                    </b-col>
                    <b-col lg="4" md="6" sm="12">
                        <div class="form--input-container">
                            <div class="form--input-label">Account Type</div>
                            <b-form-input v-model="accountType" placeholder="Account Type"></b-form-input>
                            <div class="form--error-msg"><div v-if="errorData.accountType">{{errorData.accountType[0]}}</div></div>
                        </div>              
                    </b-col>
                    <b-col lg="4" md="6" sm="12">
                        <div class="form--input-container">
                            <div class="form--input-label">Account Name</div>
                            <b-form-input v-model="accountName" placeholder="Account Name"></b-form-input>
                            <div class="form--error-msg"><div v-if="errorData.accountName">{{errorData.accountName[0]}}</div></div>
                        </div>           
                    </b-col>
                    <b-col lg="4" md="6" sm="12">
                        <div class="form--input-container">
                            <div class="form--input-label">Account Number</div>
                            <b-form-input v-model="accountNumber" placeholder="Account Number"></b-form-input>
                            <div class="form--error-msg"><div v-if="errorData.accountNumber">{{errorData.accountNumber[0]}}</div></div>
                        </div>           
                    </b-col>
                </b-row>
            </b-container>
            <div class="form--submit-option d-flex">
                <div class="col"></div>
                <div><b-button variant="danger" @click="editMode = !editMode">Cancel</b-button></div>
                <div class="pl-2"><b-button variant="primary" @click="manageBank()">save</b-button></div>
            </div>
        </div>
        <div v-if="bankExist && !editMode">
            <b-container>
                <b-row>
                    <b-col lg="6" md="12" sm="12">
                        <div class="d-flex py-1"><div style="width:200px" class="font-weight-bold">Bank Name:</div><div>{{ bankInfo.bankName }}</div></div>
                        <div class="d-flex py-1"><div style="width:200px" class="font-weight-bold">Brunch Name:</div><div>{{ bankInfo.branchName }}</div></div>
                        <div class="d-flex py-1"><div style="width:200px" class="font-weight-bold">Balance:</div><div>{{ bankInfo.currentBalance }}</div></div>
                    </b-col>
                    <b-col lg="6" md="12" sm="12">
                        <div class="d-flex py-1"><div style="width:200px" class="font-weight-bold">Account Type:</div><div>{{ bankInfo.accountName }}</div></div>
                        <div class="d-flex py-1"><div style="width:200px" class="font-weight-bold">Account Type:</div><div>{{ bankInfo.accountType }}</div></div>
                        <div class="d-flex py-1"><div style="width:200px" class="font-weight-bold">Account number:</div><div>{{ bankInfo.accountNumber }}</div></div>
                    </b-col>
                </b-row>
            </b-container>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            editModeName:"Add Bank Info",
            editMode:false,
            bankExist:false,

            bankName:null,
            branchName:null,
            accountType:null,
            accountName:null,
            accountNumber:null,

            bankInfo:[],

        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        async loadData(){
            try{
                var req = await axios.get('/api/bank/detail')
                console.log(req)
                if(req.status == 200){
                    if(req.data.bank == true){
                        this.editModeName="Update Bank Info";
                        this.bankExist=true;
                        this.bankInfo=req.data;

                        this.bankName=req.data.bankName;
                        this.branchName=req.data.branchName;
                        this.accountType=req.data.accountType;
                        this.accountName=req.data.accountName;
                        this.accountNumber=req.data.accountNumber;
                    }
                }
            }catch(err){
                if(err.response){this.notificationAlert(err.response)}
                console.log(err)
            }
        },
        async manageBank(){
            this.errorData={};
            var data = {
                bankName:this.bankName,
                branchName:this.branchName,
                accountType:this.accountType,
                accountName:this.accountName,
                accountNumber:this.accountNumber,
            }
            try{
                if(this.bankExist == true){
                    var req = await axios.put('/api/bank/update',data)
                }else{
                    var req = await axios.post('/api/bank/create',data)
                }
                
                if(req.status == 200){
                    this.loadData();
                    this.editMode = false;
                    als.fire({title: 'Bank info upadeted successfully.',});
                }
            }catch(err){
                if(err.response){this.notificationAlert(err.response)}
                console.log(err)
            }
        },
    }

}
</script>