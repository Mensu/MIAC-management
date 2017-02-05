const schema = {
  id: {  // login id
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
    default: 1,
  },
  nickname: {
    type: String,
    default: 'nickname',
  },
  github: {  // Github link
    type: String,
    match: /(?:^$)|(?:^(?:https:\/\/){0,1}github\.com\/\S{1,})/,
    default: '',
  },
  headimg: {  // link of head portrait
    type: String,
    default: '',
  },
  email: {   // E-mail
    type: String,
    match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    required: true,
  },
  hw: {
    type: [{  // Homeworks
      title: {  // Homework's title
        type: String,
        required: true,
      },
      file: {  // path to the file
        type: String,
        required: true,
      },
      comment: {  // comments
        text: {  // comment's content
          type: String,
          required: true,
        },
        author: {  // who comment
          type: String,
          required: true,
        },
      },
    }],
    default: [],
  },
  deleted: {
    type: Boolean,
    default: false,
  },
};

module.exports = { default: schema };
