let n=13;
for(let i=1;i<=13;i++){
for(let j=1;j<=i;j++){
if(i%j==0){
count++;
}
}
if(count==2){
console.log(i,"prime number");
}