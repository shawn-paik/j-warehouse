
  const getId = () =>{
    const date = new Date();
    const mm = String(date.getMonth()).padStart(2,'0');
    const dd = String(date.getDay()).padStart(2,'0');
    const yyyy = String(date.getFullYear());
    const hour = String(date.getHours()).padStart(2,'0');
    const minute = String(date.getMinutes()).padStart(2,'0');
    return mm + '-' + dd + '-' + yyyy + '-' + hour + '-' + minute
  }

    
  module.exports = {getId:getId};
