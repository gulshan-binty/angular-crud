import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  selectedCategory: any = '';
  selectedBrand: any = '';
  productName: any = '';
  tableData: { category: any, brand: any, productName: any }[] = [];
  

  categoryOptions: { value: any, label: any }[] = [
    { value: 'dress', label: 'Dress' },
    { value: 'shoe', label: 'Shoe' },
    { value: 'accessories', label: 'Accessories' }
  ];

  brandOptions: { value: any, label: any }[] = [
    { value: 'arong', label: 'Arong' },
    { value: 'sailor', label: 'Sailor' },
    { value: 'lareve', label: 'La reve' }
  ];

  onSubmit() {
    if (this.selectedCategory && this.selectedBrand && this.productName) {
      this.tableData.push({
        category: this.selectedCategory,
        brand: this.selectedBrand,
        productName: this.productName
      });
      this.selectedCategory = '';
      this.selectedBrand = '';
      this.productName = '';
    }
  }
  removeItem(itemToRemove: any) {
    const index = this.tableData.indexOf(itemToRemove);
    if (index !== -1) {
      this.tableData.splice(index, 1); 
    }
  }
  saveData() {
    // console.log('Saving data:', this.tableData);
    let data = this.tableData;
    localStorage.setItem('productData', JSON.stringify(data));
  
  }
}
