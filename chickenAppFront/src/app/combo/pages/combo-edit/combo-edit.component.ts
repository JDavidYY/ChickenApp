import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/product/models/product-info.model';
import { ProductService } from 'src/app/product/services/product.service';
import Swal from 'sweetalert2';
import { ComboModel } from '../../models/combo-info.model';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-combo-edit',
  templateUrl: './combo-edit.component.html',
  styleUrls: ['./combo-edit.component.scss']
})
export class ComboEditComponent implements OnInit {
  // productsId: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  cantidadSeleccionado: string="";
  productSeleccionado: string = "";

  products:ProductModel = null;
  id: number = 0;
  file: any;
  combo: ComboModel = new ComboModel();
  combo_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;
  image_name: string = null;

    nameFormControl = new FormControl('', [
    Validators.required,
    ]);

    descriptionFormControl = new FormControl('', [
    Validators.required,
    ]);

    idProductFormControl = new FormControl('', [
      Validators.required,
      ]);

    cantidadFormControl = new FormControl('', [
        Validators.required,
        ]);

    imageFormControl = new FormControl('', [
        Validators.required
       ]);

  constructor(private route: ActivatedRoute, private router:Router, private datePipe: DatePipe, private comboservice: ComboService, private productservice: ProductService) { }

  ngOnInit(): void {
    this.populateProduct();
    this.combo.image_name = null;
  }

  populateProduct() {
		this.productservice.seleccionarProducts()
			.subscribe(
				(response) => {
					console.log(response);
					if (response != null && response.ok && response.result != null){
						//response = JSON.parse(response['_body'])
						this.products = response.result;
					}
				},
				(err) => {
					console.log(err);
				}
			);
  }

  arrayCombo(){
    console.log(this.combo);
    if(this.productSeleccionado && this.cantidadSeleccionado)
    {
      this.combo.idproducts.push(this.productSeleccionado);
      this.combo.cantidades.push(this.cantidadSeleccionado);
      this.productSeleccionado = "";
      this.cantidadSeleccionado = "";
    }
    console.log(this.combo);
  }

  /*cargarCombo(idCombo){
    this.comboservice.getCombo(idCombo)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Combo encontrado');
          console.log(response.result);
          // this.deliveryboy = response.deliveryboy;
          // this.combo.idCombo= response.result["idCombo"];
          // this.combo.firstname= response.result["firstname"];
          // this.combo.lastname= response.result["lastname"];
          // this.combo.dni= response.result["dni"];
          // this.combo.phone= response.result["phone"];
          // this.combo.workshift= response.result["workshift"];
          // this.combo.age= response.result["age"];
          // this.combo.email= response.result["email"];
          // this.combo.password= "";
          // this.combo.adress= response.result["adress"];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }*/


  guardarCombo(){


    // validacion de campos para que no sean vacios
    if(this.combo_id>0){
      if ( !this.combo.name || !this.combo.description || !this.combo.idproducts ||
        !this.combo.cantidades) {
        return;
    }
  }else{
      if ( !this.combo.name || !this.combo.description || !this.combo.idproducts ||
        !this.combo.cantidades ) {
        return;
    }
  }
 // validacion de campos para que no sean incorrectos mediante FormControl
  if(this.combo_id>0){
    if ( this.nameFormControl.invalid || this.descriptionFormControl.invalid ) {

      return;
    }
  }else{
    if ( this.nameFormControl.invalid || this.descriptionFormControl.invalid ){

        return;
      }
  }
  //modal para que muestre el mensaje para confirmación de guardado del combo mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el combo?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarCombo desde combo.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.comboservice.guardarCombo(this.combo)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
            this.id=response.result;
            this.saveImage();
              Swal.fire(
                'Enhorabuena!',
                'El combo ha sido guardado.',
                'success'
                );
              this.router.navigate(['/combo/listado']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/combo/listado']);
  }

  saveImage() {
    console.log(this.file);
    console.log(this.id);
		this.comboservice.cargarImagen(this.file, this.id)
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

  showUploadImage() {
		return (this.image_name != null);
  }

  loadImage(event: any) {
		this.file = event.target.files[0];
    console.log(this.file);
    this.combo.image_name = this.file
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
