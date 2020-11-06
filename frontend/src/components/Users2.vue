<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Benutzer
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Suche"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="users" :search="search"></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn @click="getUsers" color="primary">Benutzer laden</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "id"
        },
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name"
        },
        {
          text: "E-Mail",
          align: "start",
          sortable: true,
          value: "email"
        },
        {
          text: "PLZ",
          align: "start",
          sortable: true,
          value: "address.zipcode"
        },
        {
          text: "Stadt",
          align: "start",
          sortable: true,
          value: "address.city"
        }
      ],
      users: []
    };
  },
  methods: {
    async getUsers() {
      /*
      Method fetch() returns a promise (promise = result expected in the future) containing the
      HTTP-response
      */
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      /*
      When we get the HTTP-response (sometime in the future), a function is called
      parsing the HTTP-body as JSON. Another promise is returned containing a JS-object
      representing the data in the HTTP-body
      */
      const data = await res.json();
      /*
      Assign the data property of the JS-object (the parseed HTTP-body) to the users property of
      that component.
      */
      this.users = data;
    }
  }
};
</script>

<style></style>
