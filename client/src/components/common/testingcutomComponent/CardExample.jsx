

import React from "react";

import { ShoppingBag } from "lucide-react";
import Card from "../Card";

const CardExample = () => {
  return (
    <div className="min-h-screen  flex flex-wrap gap-6 justify-center items-center p-10">
      <Card
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        title="Premium Coffee"
        description="Rich aroma and smooth taste for your perfect mornings."
        buttonText="Order Now"
        onButtonClick={() => alert("Order placed!")}
        variant="light"
      />

     <Card
  image="https://images.unsplash.com/photo-1675241234567"
  title="ASUS Vivobook 15"
  rating={4.5}
  reviews={9}
  discount={35}
  price={33990}
  mrp={51990}
  offerText="Flat 2000 Off on Axis Credit Cards"
  deliveryDate="Fri, 17 Oct"
  onAddToCart={() => alert("Added to cart!")}
/>


      <Card
        title="Smart Watch"
        description="Track fitness, notifications, and more in style."
        buttonText="Buy Now"
        variant="gradient"
        hoverEffect={true}
      >
        <div className="flex items-center gap-2 text-sm opacity-90">
          <ShoppingBag size={16} />
          <span>Free Delivery</span>
        </div>
      </Card>
    </div>
  );
};

export default CardExample;
