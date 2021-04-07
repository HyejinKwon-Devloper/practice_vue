<template>
  <v-card flat outlined rounded="lg" min-width="100%">
    <v-card-title>공지사항</v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" v-for="key in getKeys()" :key="key">
                {{ key }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in listItem" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.contents }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: function() {
    return {
      listItem: [
        { id: 1, title: "공지1", contents: "첫번째 공지사항 내용입니다." },
        { id: 2, title: "공지2", contents: "두번째 공지사항 내용입니다." },
        { id: 3, title: "공지3", contents: "세번째 공지사항 내용입니다." },
        { id: 4, title: "공지4", contents: "네번째 공지사항 내용입니다." },
        { id: 5, title: "공지5", contents: "다섯번째 공지사항 내용입니다." },
      ],
    };
  },
  methods: {
    getKeys() {
      if (this.listItem && this.listItem.length > 0) {
        let one = this.listItem[0];
        console.log(Object.keys(one));
        return Object.keys(one);
      }
    },
  },
};
</script>
