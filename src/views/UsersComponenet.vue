<template>
<!--  Table data-->
  <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="desserts"
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
                  md="4"
                  sm="6"
              >
                <v-text-field
                    v-model="fullName"
                    label="F.I.O.*"
                    :rules="rules"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
                  sm="6"
              >
                <v-text-field
                    hint="example of helper text only on focus"
                    label="Middle name"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
                  sm="6"
              >
                <v-text-field
                    hint="example of persistent helper text"
                    label="Last name*"
                    persistent-hint
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
                  sm="6"
              >
                <v-text-field
                    label="Email*"
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
                  sm="6"
              >
                <v-text-field
                    label="Password*"
                    type="password"
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
                  sm="6"
              >
                <v-text-field
                    label="Confirm Password*"
                    type="password"
                    required
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                ></v-select>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
              >
                <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    auto-select-first
                    multiple
                ></v-autocomplete>
              </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>
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
      modal: false,
      page: 1,
      itemsPerPage: 5,
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: false,
          title: 'Dessert (100g serving)',
        },
        { title: 'Calories', key: 'calories' },
        { title: 'Fat (g)', key: 'fat' },
        { title: 'Carbs (g)', key: 'carbs' },
        { title: 'Protein (g)', key: 'protein' },
        { title: 'Iron (%)', key: 'iron' },
        { title: 'Iron (%)', key: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
      ],
      rules: [
        value => {
          if (value?.length == 0 ) return true

          return 'F.I.O kiritilishi shart !!!'
        },
      ],
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.desserts.length / this.itemsPerPage)
    },
  },
}
</script>