const create = async (req) => {
  // const body = await req.json();
  // console.log(body);
  return Response.json("This is a function to test the api is working");
};

export { create as POST };
