export default function page() {
  return (
    <div>
      <pre
        style={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {data}
      </pre>
    </div>
  );
}

const data = `{"id":26,"title":"Plant Hanger For Home","description":"Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf","price":41,"discountPercentage":17.86,"rating":4.08,"stock":131,"brand":"Boho Decor","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/26/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/26/1.jpg","https://i.dummyjson.com/data/products/26/2.jpg","https://i.dummyjson.com/data/products/26/3.jpg","https://i.dummyjson.com/data/products/26/4.jpg","https://i.dummyjson.com/data/products/26/5.jpg","https://i.dummyjson.com/data/products/26/thumbnail.jpg"]}`;
