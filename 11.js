function domainName(url){
  url = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  return url.split('.')[0];
}