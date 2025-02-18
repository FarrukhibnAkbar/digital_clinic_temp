<template>
<!--  Table data-->
  <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="users"
      :items-per-page="itemsPerPage"
  >

    <template v-slot:bottom>
      <div class="d-flex pl-3">
        <v-btn
            color="success"
            @click="modal = true">
          Ma`lumot qo`shish
        </v-btn>
      </div>
      <div class="text-center pt-2">
        <v-pagination
            v-model="page"
            :length="pageCount"
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
                    align="left"
                    :rules="rules"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="12"
                  sm="6"
              >
                <v-text-field
                    v-model="birthData"
                    label="tug`ulgan sana:*"
                    type="date"
                    variant="outlined"
                    align="center"
                    :rules="rules"
                    input-class="text-center"
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
                    :error="pinfl && pinfl.length !== 14"
                    variant="outlined"
                    input-class="text-center"
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
                    :rules="rules"
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
                    :rules="rules"
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
                    :rules="rules"
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
                variant="plain"
                @click="modal = false"
            >Bekor qilish</v-btn>

            <v-btn
                color="primary"
                variant="tonal"
                @click="modal = false"
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
      bithDate: null,
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
      ],
      users: [
        {
          full_name: 'Frozen Yogurt',
          birth_date: '2000-01-01',
          pinfl: 60101001010001,
          phone: '+998901234567',
          position: 'Vrach',
          direction: 'Pediatr',
        },
      ],
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
}
</script>