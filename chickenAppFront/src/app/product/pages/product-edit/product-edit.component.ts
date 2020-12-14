import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  product_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  id: number = 0;
	file: any;
	lead_id: number = 0;
	image_name: string = null;
	progress = false;
 

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
 
  imageFormControl = new FormControl('', [
  Validators.required
  ]);

  constructor(private route: ActivatedRoute, private router:Router, private datePipe: DatePipe, private productservice: ProductService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.populateCategory();
    this.product.image_name = null;
    this.product_id = +this.route.snapshot.paramMap.get('product_id');
    if ( this.product_id > 0) {
      this.cargarProduct( this.product_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }

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

  cargarProduct(idProduct){
    this.productservice.getProduct(idProduct)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Product encontrado');
          console.log(response.result);
          // this.deliveryboy = response.deliveryboy;
          this.product.idProduct= response.result["idProduct"];
          this.product.name= response.result["name"];
          this.product.description= response.result["description"];
          this.product.price= response.result["price"];
          this.categories.idCategory= response.result["idCategory"];
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
        !this.product.categoryid || !this.product.image_name) {
          // if(this.product.price != null){
          //   console.log("hay algo")
          // }
        console.log(this.product)
        return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.nameFormControl.invalid || this.descriptionFormControl.invalid || this.priceFormControl.invalid 
      || this.categoryidFormControl.invalid ) {
        console.log(this.product)
        console.log("entro aqui")
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
        this.productservice.saveProduct(this.product)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 ){
					  	this.id = response.result;
                if (this.file != null) {
                  this.saveImage();
                } else {
                  Swal.fire(
                    'Enhorabuena!',
                    'El product ha sido guardado.',
                    'success'
                    );
                  this.router.navigate(['/product/listado']);
                } 
              }             
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/product/listado']);
  }

  saveImage() {
		this.productservice.cargarImagen(this.file, this.id)
			.subscribe(
				(response) => {
					//console.log(response);
					if (response && response.ok) {
						Swal.fire('Success!', 'Your event has been saved.', 'success');
						this.regresar();
					}
				},
				(err) => {
					console.log("Error al guardar imagen");
				}
			);
  }

  deletenameImage() {
    this.image_name = null;

		this.product.image_name = null;
		//this.nombre_imagen = false;
		//this.carga_imagen = true;
  }
  
  showUploadImage() {
		return (this.image_name != null);
  }

  clearCarga() {
		this.file = null;
  }
  
  loadImage(event: any) {
		this.file = event.target.files[0];
    console.log(this.file);
    this.product.image_name = this.file
	}
  // save() {
		
		// if (!this.product.name || !this.product.description || !this.product.price || 
    //   !this.product.categoryid) {
		// 	return;
		// }

		// //console.log(this.article);
		// this.progress = true;
		// this.productservice.saveProduct(this.product)
			// .subscribe(
			// 	(response) => {
			// 		if (response && response.ok && response.result != 0) {
						// this.progress = false;
						// this.id = response.result;
						// console.log(this.id);
						// if (this.file != null) {
						// 	this.saveImage();
						// } else {
						// 	Swal.fire('Success!', 'Your event has been saved.', 'success');
						// 	this.back();
						// }
	// 				}
	// 			},
	// 			(err) => {
	// 				console.log(err);
	// 			}
	// 		);
	// }

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
