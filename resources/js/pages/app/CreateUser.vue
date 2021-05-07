<template >
    <div class="page--layout">
        <div class="page--title">
            <div>Create User</div>
        </div>
        <b-container>
            <b-row>
                <b-col lg="4" md="6" sm="12">
                    <div class="form--input-container">
                        <div class="form--input-label">Name</div>
                        <b-form-input v-model="name" placeholder="Name"></b-form-input>
                        <div class="form--error-msg"><div v-if="errorData.name">{{errorData.name[0]}}</div></div>
                    </div>
                </b-col>
                <b-col lg="4" md="6" sm="12">
                    <div class="form--input-container">
                        <div class="form--input-label">Email</div>
                        <b-form-input v-model="email" placeholder="Email"></b-form-input>
                        <div class="form--error-msg"><div v-if="errorData.email">{{errorData.email[0]}}</div></div>
                    </div>              
                </b-col>
                <b-col lg="4" md="6" sm="12">
                    <div class="form--input-container">
                        <div class="form--input-label">Password</div>
                        <b-form-input v-model="password" placeholder="Password" type="password"></b-form-input>
                        <div class="form--error-msg"><div v-if="errorData.password">{{errorData.password[0]}}</div></div>
                    </div>              
                </b-col>
                <b-col lg="4" md="6" sm="12">
                    <div class="form--input-container">
                        <div class="form--input-label">Address</div>
                        <b-form-input v-model="address" placeholder="Address"></b-form-input>
                        <div class="form--error-msg"><div v-if="errorData.address">{{errorData.address[0]}}</div></div>
                    </div>           
                </b-col>
                <b-col lg="4" md="6" sm="12">
                    <div class="form--input-container">
                        <div class="form--input-label">Phone</div>
                        <b-form-input v-model="phone" placeholder="Phone"></b-form-input>
                        <div class="form--error-msg"><div v-if="errorData.phone">{{errorData.phone[0]}}</div></div>
                    </div>           
                </b-col>
                <b-col lg="4" md="6" sm="12">
                    <div class="form--input-container">
                        <div class="form--input-label">Grade/Rank</div>
                        <b-form-select v-model="grade" :options="gradeOption" placeholder="Grade/Rank"></b-form-select>
                        <div class="form--error-msg"><div v-if="errorData.grade">{{errorData.grade[0]}}</div></div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div class="form--submit-option d-flex">
            <div class="col"></div>
            <div><b-button variant="primary" @click="createUser()">Create</b-button></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:null,
            email:null,
            password:null,
            gradeOption:[1,2,3,4,5,6],
            grade:null,
            address:null,
            phone:null,
        }
    },
    methods:{
        async createUser(){
            var data = {
                name:this.name,
                email:this.email,
                password:this.password,
                grade:this.grade,
                address:this.address,
                phone:this.phone,
            }
            try{
                var req = await axios.post('/api/user/create',data)
                if(req.status == 200){
                    als.fire({title: 'User created successfully.',});
                    this.nulify();
                    this.errorData={};
                }
            }catch(err){
                if(err.response){this.notificationAlert(err.response)}
                console.log(err)
            }
        },
        nulify(){
            this.name = null;
            this.email = null;
            this.password = null;
            this.grade = null;
            this.address = null;
            this.phone = null;
        }
    }
}
</script>