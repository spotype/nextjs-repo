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

const data = `{"id":20,"title":"Freckle Treatment Cream- 15gm","description":"Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.","price":70,"discountPercentage":16.99,"rating":4.06,"stock":140,"brand":"Fair & Clear","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/20/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/20/1.jpg","https://i.dummyjson.com/data/products/20/2.jpg","https://i.dummyjson.com/data/products/20/3.jpg","https://i.dummyjson.com/data/products/20/4.jpg","https://i.dummyjson.com/data/products/20/thumbnail.jpg"]}`;
