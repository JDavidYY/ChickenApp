import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryModel } from '../../models/category-info.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {


  category: CategoryModel = new CategoryModel();
  category_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  nameFormControl = new FormControl('', [
  Validators.required,
  ]);

  descriptionFormControl = new FormControl('', [
  Validators.required,
  ]);

  constructor(private route:ActivatedRoute,  private router:Router, private datePipe: DatePipe, private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.category_id = +this.route.snapshot.paramMap.get('category_id');
    if ( this.category_id > 0) {
      this.cargarCategory( this.category_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }
  }

  cargarCategory(idCategory){
    this.categoryservice.getCategory(idCategory)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Categoría encontrado');
          console.log(response.result);
          // this.deliveryboy = response.deliveryboy;
          this.category.idCategory= response.result["idCategory"];
          this.category.name= response.result["name"];
          this.category.description= response.result["description"];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  guardarCategory(){

    // validacion de campos para que no sean vacios
    if ( !this.category.name || !this.category.description) {

      return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.nameFormControl.invalid || this.descriptionFormControl.invalid ) {
      return;
    }
  //modal para que muestre el mensaje para confirmación de guardado del categiry mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el category?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarCategory desde category.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.categoryservice.guardarCategory(this.category)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
              Swal.fire(
                'Enhorabuena!',
                'El category ha sido guardado.',
                'success'
                );
              this.router.navigate(['/category/listado']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/category/listado']);
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
