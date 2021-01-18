import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import{Professor} from '../models/Professor'

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef!: BsModalRef;
  public professorForm!: FormGroup;
  public titulo = "Professores";
  public professorSelect !: Professor;
  public textoSimples!: string;
  

  public professores = [

    {id: 1, nome:'Ricardo', disciplina:"Matematica" },
    {id: 2, nome:'Jhon',    disciplina:"Portugues" },
    {id: 3, nome:'Vinicius',disciplina:"Historia" },
    {id: 4, nome:'Matheus', disciplina:"Geografia" },
    {id: 5 ,nome:'Jose',    disciplina:"Programação" },
    {id: 6 ,nome:'Gustavo', disciplina:"Fsica" },
  ];


  criarForm()
  {
    this.professorForm = this.fb.group({
      nome:["", Validators.required],
      disciplina: ["", Validators.required],
    
    })
  } 

  professorSubmit()
  {
    console.log(this.professorForm.value);
  }

  professorSelecionado (professor: Professor)
  {
    this.professorSelect = professor;
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
