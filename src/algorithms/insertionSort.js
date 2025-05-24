export function getInsertionSortAnimations(array)
{
  const animations=[];
  const arr=array.slice();
for(let i=1;i<arr.length;i++)
{
  let key=arr[i];
  let j=i-1;
  while(j>=0)
  {
    animations.push(["compare",j,j+1]);
    animations.push(["compare",j,j+1]);
    if(arr[j]>key)
    {
     animations.push(["swap",j+1,arr[j]]);
     arr[j+1]=arr[j];
     j--;
    }
    else{
      break;
    }
  }
  //Place key at its correct position
  animations.push(["swap",j+1,key]);
  arr[j+1]=key;
}
  return{ animations,sortedArray:arr};

}