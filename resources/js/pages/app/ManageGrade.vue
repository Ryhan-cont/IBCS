<template >
    <div class="page--layout">
        <div class="page--title">
            <div>Menage Grade</div>
        </div>
        <b-container>
            <div class="d-flex">
                <div>
                    <div class="form--input-container">
                        <div class="form--input-label">Basic salary of the lowest grade</div>
                        <b-form-input v-model="lowGradeBasic" placeholder="Basic salary of the lowest grade"></b-form-input>
                        <div class="form--error-msg"><div v-if="errorData.lowGradeBasic">{{errorData.lowGradeBasic[0]}}</div></div>
                    </div>
                </div>
                <div class="pl-2" style="padding-top:25px">
                    <b-button @click="createSelary()" variant="primary">Save</b-button>
                </div>
            </div>
        </b-container>
        <div class="pt-5 pl-3">
            <div style="max-width:400px" class="my-3" v-for="(item, index) in gradeList" :key="index">
                <div style="width:200px; font-size:18px" class="font-weight-bold">Grade: {{ item.grade }}</div>
                <div class="d-flex"><div style="width:200px" class="font-weight-bold">Basic:</div><div>{{ item.basic }}</div></div>
                <div class="d-flex"><div style="width:200px" class="font-weight-bold">House rent:</div><div>{{ item.houseRent }}</div></div>
                <div class="d-flex"><div style="width:200px" class="font-weight-bold">Medical allowance:</div><div>{{ item.medicalAllowance }}</div></div>
                <div class="d-flex"><div style="width:200px" class="font-weight-bold">Total:</div><div>{{ item.total }}</div></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            lowGradeBasic:null,
            gradeList:[],
        }
    },
    mounted(){
        this.loadData();
    },
    methods:{
        async loadData(){
            try{
                var req = await axios.get('/api/grade/list')
                this.gradeList = req.data.list;
            }catch(err){
                console.log(err);
            }
        },
        async createSelary(){
            var data = {
                lowGradeBasic:this.lowGradeBasic
            }
            try{
                var req = await axios.put('/api/grade/update',data)
                if(req.status == 200){
                    als.fire({title: 'Grade basic value updated.'});
                    this.loadData();
                }
            }catch(err){
                if(err.response){this.notificationAlert(err.response)}
                console.log(err)
            }
        }

    }
}
</script>