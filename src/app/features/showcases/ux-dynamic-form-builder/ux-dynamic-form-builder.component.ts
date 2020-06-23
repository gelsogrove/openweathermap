import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ux-dynamic-form-builder',
  templateUrl: './ux-dynamic-form-builder.component.html',
  styleUrls: ['./ux-dynamic-form-builder.component.scss']
})
export class UxDynamicFormBuilderComponent  {

  public formvalues;
  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: false,
      placeholder: 'test placeholder'
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'IT',
      required: true,
      options: [
        { key: 'IT', label: 'ITALIA' },
        { key: 'US', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'Gender',
      label: 'Gender',
      value: 'm',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    },
    {
      type: 'text',
      multiline: true,
      name: 'note',
      label: 'Note',
      required: false
    },
    {
      type: 'text',
      name: 'number',
      label: 'Phone number',
      required: false,
      placeholder: 'es +34...'
    }

  ];

  onSubmit(formvalues: any) {
   this.formvalues = formvalues;
  }

}
