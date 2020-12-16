<template>
  <div class="books">
    <table align='left' width="80%" >
      <tr>
        <th v-for='(value,key) in columnList'>
          {{value}}
        </th>
        <th></th>
        <th></th>
      <tr>
      <tr v-for='item in books'>
        <td v-for='(value,key) in columnList'>{{item[key]}}</td>
        <td><el-button type="primary" class="login-submit" @click="rent(item)">借阅</el-button> </td>
        <td><el-button type="primary" class="login-submit" @click="returnBooks(item)">归还</el-button> </td>
      </tr>
    </table>
  </div>
</template>

<script>

import Qs from 'qs'

export default {
  name: 'books',

  data(){
      return{
      columnList:{'book_name':'书名','count':'余量'},
      books:''
    }
  },
created:function(data){

                this.$axios
                .get('/getBooks.do')
                .then(successResponse => {

                  this.books = JSON.parse(successResponse.data.msg)
                  console.log(this.books )

                })
                .catch(failResponse => {})
              },
  methods: {
    rent:function(item){

                    console.log(item.book_name);
                    this.$axios
                    .post('/rentBooks.do', Qs.stringify({"book_name":item.book_name}))
                    .then(successResponse => {
                      console.log(successResponse)
                      this.responseResult = JSON.stringify(successResponse.data)
                      if (successResponse.data.code === 200) {
                        this.$router.go(0)    //post后自动刷新
                        this.$notify({
                          title: '成功',
                          message: successResponse.data.message,
                          type: 'success'
                        });
                      }else{
                        this.$notify({
                          title:"失败",
                          message:successResponse.data.message,
                          type:'error'
                        })
                      }
                    })
                    .catch(failResponse => {})
                  },
        returnBooks:function(item){

                            console.log(item.book_name);
                            this.$axios
                            .post('/returnBooks.do', Qs.stringify({"book_name":item.book_name}))
                            .then(successResponse => {
                              console.log(successResponse)
                              this.responseResult = JSON.stringify(successResponse.data)
                              if (successResponse.data.code === 200) {
                                this.$router.go(0)     //post后自动刷新
                                this.$notify({
                                  title: '成功',
                                  message: successResponse.data.message,
                                  type: 'success'
                                });
                              }else{
                                this.$notify({
                                  title:"失败",
                                  message:successResponse.data.message,
                                  type:'error'
                                })
                              }
                            })
                            .catch(failResponse => {})
                          },
      }

}
</script>


