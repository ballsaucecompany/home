
export const config = {
    api: `${process.env.REACT_APP_API}`,
    // url: './api/contact/index.php'
    title: 'Shipping Info',
    successMessage: 'Thank you for contcting me.',
    errorMessage: 'Sorry we have some problems.',
    fields:{
      firstName: '',
      lastName: '',
      email: '',
      msg: ''
    },
    fieldsConfig:  [
     { id: 1, label: 'First Name', fieldName: 'firstName', type: 'text',placeholder:'Your First Name', isRequired: true , klassName:'first-name-field'},
     { id: 2, label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Your Last Name', isRequired: true , klassName:'last-name-field'},
     { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , klassName:'email-field'},
     { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , klassName:'message-field'}
    ]
  }
  export default config;