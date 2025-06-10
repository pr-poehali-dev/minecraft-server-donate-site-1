import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface DonateCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  color: string;
}

const DonateCard = ({
  title,
  price,
  originalPrice,
  features,
  popular,
  color,
}: DonateCardProps) => {
  return (
    <Card
      className={`relative bg-slate-900 border-2 hover:scale-105 transition-all duration-300 ${
        popular
          ? "border-green-500 shadow-lg shadow-green-500/20"
          : "border-slate-700 hover:border-green-500/50"
      }`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
          Популярно
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <div
          className={`w-16 h-16 mx-auto rounded-full ${color} flex items-center justify-center mb-4`}
        >
          <Icon name="Crown" size={32} className="text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
        <div className="flex items-center justify-center space-x-2">
          {originalPrice && (
            <span className="text-gray-500 line-through text-lg">
              {originalPrice}₽
            </span>
          )}
          <span className="text-3xl font-bold text-green-400">{price}₽</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Icon
                name="Check"
                size={16}
                className="text-green-400 mr-3 flex-shrink-0"
              />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 mt-6"
          size="lg"
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          Купить сейчас
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonateCard;
