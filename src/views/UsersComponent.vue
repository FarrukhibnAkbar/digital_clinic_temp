<template>

<!--  Table data-->
  <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="users"
      :items-per-page="itemsPerPage"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.full_name }}</td>
        <td>{{ item.birth_date }}</td>
        <td>{{ item.pinfl }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.position }}</td>
        <td>{{ item.direction }}</td>
        <td><v-icon @click="remove(item.id)" aria-hidden="false" color="red">mdi-delete</v-icon></td>
      </tr>
    </template>


    <template v-slot:bottom>
      <div class="d-flex pl-3">
        <v-btn
            color="cyan-accent-2"
            icon="mdi-plus"
            @click="modal = true">
          <v-tooltip >
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" icon="mdi-plus"></v-icon>
          </template>

            Foydalanuvchi qo`shish
        </v-tooltip>
        </v-btn>
      </div>
      <div class="text-center pt-2">
        <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="4"
            rounded="circle"
        ></v-pagination>
      </div>
    </template>
  </v-data-table>


<!--  Modal form-->
  <modal>
    <div class="pa-4 text-center">
      <v-dialog
          v-model="modal"
          max-width="600"
          persistent
      >

        <v-card
            prepend-icon="mdi-account"
            title="Foydalanuvchi qo`shish"
        >
          <v-card-text>
            <v-row dense>
              <v-col
                  cols="12"
                  md="12"
                  sm="6"
              >
                <v-text-field
                    v-model="fullName"
                    label="F.I.O.:*"
                    variant="outlined"
                    clearable
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="12"
                  sm="6"
              >
                <v-text-field
                    v-model="birthDate"
                    label="tug`ulgan sana:*"
                    type="date"
                    variant="outlined"
                    class="text-center"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="12"
                  sm="6"
              >
                <v-text-field
                    v-model="pinfl"
                    label="JShShIR:*"
                    type="number"
                    variant="outlined"
                    style="text-align: center;"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="12"
                  sm="6"
              >
                <v-text-field
                    v-model="phone"
                    label="telefon raqam:*"
                    type="phone"
                    variant="outlined"
                    style="text-align: center;"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="12"
                  sm="6"
              >
                <v-text-field
                    v-model="position"
                    label="lavozimi:*"
                    variant="outlined"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="12"
                  sm="6"
              >
                <v-autocomplete
                    v-model="direction"
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="yo`naalishi:*"
                    variant="outlined"
                    clearable
                ></v-autocomplete>
              </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis">*ko`rsatgichi majburiy maydon</small>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                variant="outlined"
                color="warning"
                @click="modal = false, resetForm()"
            >Bekor qilish</v-btn>

            <v-btn
                variant="outlined"
                color="success"
                @click="addFormData()"
            >Saqlash</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </modal>
</template>
<script>


export default {
  data () {
    return {
      fullName: null,
      birthDate: null,
      pinfl: null,
      phone: null,
      position: null,
      direction: null,
      modal: false,
      page: 1,
      itemsPerPage: 5,
      headers: [
        { title: 'F.I.O.', key: 'full_name', sortable: true, align: 'center' },
        { title: 'tug`ulgan sanasi', key: 'birth_date' },
        { title: 'JShShIR', key: 'pinfl' },
        { title: 'telefon raqami', key: 'phone' },
        { title: 'lavozimi', key: 'position' },
        { title: 'yo`naalishi', key: 'direction' },
        { title: 'o`chirish', key: 'delete' },
      ],
      users: [],
      rules: [
        value => {
          if (value?.length == 0 ) return true

          return 'Maydonni kiritish shart !!!'
        },
      ],
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.users.length / this.itemsPerPage)
    },
  },
  methods: {

    addFormData(){
      if(this.checkFormValidation()){
        this.$toast("Maydonlar to`ldirilganligini tekshiring!", "error")
        return
      }
      this.users.push(
          {
            id: this.users.length + 1 || 1,
            full_name: this.fullName,
            birth_date: this.birthDate,
            pinfl: this.pinfl,
            phone: this.phone,
            position: this.position,
            direction: this.direction
          })
      this.modal = false
      this.resetForm()
    },

    remove (id) {
      const index = this.users.findIndex(user => user.id === id)
      this.users.splice(index, 1)
    },

    resetForm(){
      this.fullName = null;
      this.birthDate = null;
      this.pinfl = null;
      this.phone = null;
      this.position = null;
      this.direction = null;
    },

    checkFormValidation(){
      if(!this.fullName || !this.birthDate || this.pinfl.length != 14 || !this.phone || !this.position || !this.direction){
        return true
      }
      return false
    }
  }
}
</script>