let env = 'pro';
const { hostname } = window.location;
if (hostname.startsWith('dev')) {
  env = 'dev';
} else if (hostname.startsWith('fat')) {
  env = 'fat';
} else if (hostname.startsWith('uat')) {
  env = 'uat';
} else {
  env ='pro';
}

export default env;
