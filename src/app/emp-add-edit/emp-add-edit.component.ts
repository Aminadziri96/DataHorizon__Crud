import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      age: '',
      contactNumber: '',
      salary: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.isEditMode = !!this.data;
    this.empForm.patchValue(this.data);
  
    if (!this.isEditMode) {
      this.addNewEmployeeAutomatically();
    }
  }

  addNewEmployeeAutomatically() {
    const newEmployee = {
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      age: '',
      contactNumber: '',
      salary: '',
      address: '',
    };
    this.empForm.patchValue(newEmployee);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      const newEmployee = this.empForm.value;
      // Simulate a delay to emulate API call
      setTimeout(() => {
        // Generate a new ID for the new employee
        const newId = Math.max(...this.data.map((employee: any) => employee.id)) + 1;
        newEmployee.id = newId;
        
        // Simulate addition of employee to data source
        this.data.push(newEmployee);
        
        // Show a success message
        this._dialogRef.close(true);
      }, 500); // Delay of 500ms to simulate the API call
    }
  }
}
