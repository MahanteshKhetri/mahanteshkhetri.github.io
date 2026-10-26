import fs from 'node:fs';

// The Web Analytics site token is a public collection identifier, not an API key.
// Shared by every HTML page; use the snippet supplied by Cloudflare Web Analytics.
export function analyticsScript(){
  const config=JSON.parse(fs.readFileSync('content/analytics.json','utf8'));
  if(!config.enabled)return '';
  if(!/^[a-f0-9]{32}$/i.test(config.token||'')){
    throw new Error('A valid Cloudflare Web Analytics site token is required.');
  }
  return `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='${JSON.stringify({token:config.token})}'></script>`;
}
