import _ from "lodash";

const data = [
  {
    id: 1,
    login: "user1",
  },
  {
    id: 2,
    login: "user2",
  },
  {
    id: 1,
    login: "user1",
  },
];

const uniqData = _.uniqBy(data, "id");
console.log(uniqData);
