// problem with conditionals...

// let requestType = 'GET';
// let requestType = 'PUT';
// let requestType = 'OTHER';
let requestType = undefined;


if (!requestType === 'GET' || !requestType === 'PUT') {
  console.log('(1) Neither GET nor PUT');
}

if (requestType !== 'GET' || requestType !== 'PUT') {
  console.log('(2) Neither GET nor PUT');
}
