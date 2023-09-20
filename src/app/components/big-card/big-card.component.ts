import { Component } from '@angular/core';


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss','big-card.responsive.scss']
})
export class BigCardComponent {
  emailValue:string = ''
  cadastroEmail(){
    if(!this.emailValue){
      alert('Por favor, preencher um e-mail')

    }else{
      alert(`E-mail cadastrado :  ${this.emailValue}`)

    }
    this.emailValue = ''
  }


}
