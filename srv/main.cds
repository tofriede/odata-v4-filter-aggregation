using northwind from '../db/schema';

service Main {
  entity Products as projection on northwind.Products;
}
