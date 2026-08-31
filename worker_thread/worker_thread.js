
onmessage = (ev) => {
  const i32a = new Int32Array(ev.data.sab);
  i32a[0] = 10;
  console.log(ev.data.sab);

};

