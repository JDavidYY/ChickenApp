import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveryboy-edit',
  templateUrl: './deliveryboy-edit.component.html',
  styleUrls: ['./deliveryboy-edit.component.scss']
})
export class DeliveryboyEditComponent implements OnInit {


  chef: ChefModel = new ChefModel();
  nacimiento: string;

  dniFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(8)
  ]);

  apellidoPatFormControl = new FormControl('', [
  Validators.required,
  ]);

  apellidoMatFormControl = new FormControl('', [
  Validators.required,
  ]);

  nombresFormControl = new FormControl('', [
  Validators.required
  ]);

  fechaNacimientoFormControl = new FormControl('', [
  Validators.required
  ]);

  celularFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(9)
  ]);

  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email
  ]);

  direccionFormControl = new FormControl('', [
  Validators.required
  ]);


  constructor(private router:Router, private datePipe: DatePipe, private chefservice: ChefService) { }

  ngOnInit(): void {
  }

  guardarChef(){

    let selectedDate = this.datePipe.transform(this.nacimiento, 'yyyy/MM/dd');
    this.chef.nacimiento=selectedDate;

    // validacion de campos para que no sean vacios
    if ( !this.chef.nombre || !this.chef.apellidoPat || !this.chef.apellidoMat || 
        !this.chef.celular || !this.chef.direccion || !this.chef.dni ||
      !this.chef.email  || !this.chef.nacimiento ) {

      return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.dniFormControl.invalid || this.nombresFormControl.invalid || this.apellidoPatFormControl.invalid 
      || this.apellidoMatFormControl.invalid || this.celularFormControl.invalid
      || this.direccionFormControl.invalid || this.dniFormControl.invalid || this.emailFormControl.invalid
       || this.fechaNacimientoFormControl.invalid ) {
      return;
    }
  //modal para que muestre el mensaje para confirmación de guardado del chef mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el chef?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarChef desde chef.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.chefservice.guardarChef(this.chef)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response.status && response.statusCode == 200 && response.message != "" )
              Swal.fire(
                'Enhorabuena!',
                'El chef ha sido guardado.',
                'success'
                );
              this.router.navigate(['/chef/list']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/chef/list']);
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
