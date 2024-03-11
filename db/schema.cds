namespace northwind;

entity Products {
  key ProductID: Integer;
      ProductName: String;
      QuantityPerUnit: String;
      UnitPrice: Decimal;
      CategoryID: Integer;
      SupplierID: Integer;
      UnitsInStock: Integer;
      UnitsOnOrder: Integer;
      ReorderLevel: Integer;
      Discontinued: Boolean;
}