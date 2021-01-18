import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import{Aluno} from '../models/Aluno';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {

  public modalRef!: BsModalRef;
  public alunoForm!: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado!: Aluno;
  public textoSimples!: string;


  public alunos = [
    {id: 1, nome: 'Maria', sobrenome: 'Braga', telefone: 12548},
    {id: 2, nome: 'Paula', sobrenome: 'Braga', telefone: 12548},
    {id: 3, nome: 'Laura', sobrenome: 'Braga', telefone: 12548},
    {id: 4, nome: 'Lucas', sobrenome: 'Braga', telefone: 12548},
    {id: 5, nome: 'Pedro',  sobrenome: 'Braga', telefone: 12548},
    {id: 6, nome: 'Paulo',  sobrenome: 'Braga', telefone: 12548},
    {id: 7, nome: 'Luiza',  sobrenome: 'Braga', telefone: 12548},

  ];

   criarForm()
  {
    this.alunoForm = this.fb.group({
      nome:["", Validators.required],
      sobrenome: ["", Validators.required],
      telefone: ["", Validators.required],
    })
  }

  alunoSubmit()
  {
    console.log(this.alunoForm.value);
  }

  alunoSelected(aluno: Aluno)
  {
    this.alunoSelecionado = aluno;
  }
  
  voltar()
  {
   
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


 


  constructor(private fb: FormBuilder, private modalService: BsModalService) 
  {
    this.criarForm();
  }

  ngOnInit(): void {
  }

}
