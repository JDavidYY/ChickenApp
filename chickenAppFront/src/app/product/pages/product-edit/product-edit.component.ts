import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/category/models/category-info.model';
import { CategoryService } from 'src/app/category/services/category.service';
import Swal from 'sweetalert2';
import { ProductModel } from '../../models/product-info.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  categories:CategoryModel = null;
  
 
  product: ProductModel = new ProductModel();

  nameFormControl = new FormControl('', [
  Validators.required,
  ]);

  descriptionFormControl = new FormControl('', [
  Validators.required,
  ]);

  priceFormControl = new FormControl('', [
  Validators.required
  ]);

  categoryidFormControl = new FormControl('', [
  Validators.required
  ]);

  constructor(private router:Router, private datePipe: DatePipe, private productservice: ProductService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.populateCategory();
  }

	populateCategory() {
		this.categoryService.seleccionarCategories()
			.subscribe(
				(response) => {
					console.log(response);
					if (response != null && response.ok && response.result != null){
						//response = JSON.parse(response['_body'])
						this.categories = response.result;
					}
				},
				(err) => {
					console.log(err);
				}
			);
	}
  guardarProduct(){

    // validacion de campos para que no sean vacios
    if ( !this.product.name || !this.product.description || !this.product.price || 
        !this.product.categoryid) {

      return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.nameFormControl.invalid || this.descriptionFormControl.invalid || this.priceFormControl.invalid 
      || this.categoryidFormControl.invalid) {
      return;
    }
  //modal para que muestre el mensaje para confirmación de guardado del product mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el product?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarProduct desde product.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.productservice.guardarProduct(this.product)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response.status && response.statusCode == 200 && response.message != "" )
              Swal.fire(
                'Enhorabuena!',
                'El product ha sido guardado.',
                'success'
                );
              this.router.navigate(['/product/list']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/product/list']);
  }

  keypressNumbers(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
    }

  keypressLetters(event: any) {
    const pattern = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
    }   


}
