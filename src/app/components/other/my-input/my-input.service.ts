import { Injectable } from '@angular/core';

interface MyInputInterface {
  key: string
  value?: string
}

class MyInput {
  private key: string;
  private value?: string

  constructor(key: string, keyClass?: string) {
    this.key = key;
  }

  verify( key: string ) {
    return key == this.key;
  }

  get() {
    if (this.value) return this.value
    else return '';
  }
  set( value: string ) { this.value = value; }
}

@Injectable({
  providedIn: 'root'
})
export class MyInputService {

  private values: MyInput[] = [];
  constructor() { }

  private verify( key: string)  {
    for ( let i = 0; i < this.values.length; i++ ) {
      if ( this.values[i].verify(key) ) return true;
    }
    false;
  }

  private getIndex( key: string ) {
    if ( this.verify(key) )
      for (let i = 0; i < this.values.length; i++) {
        if (this.values[i].verify(key)) return i;
      }
    else return 0;
  }

  addKey( key: string ) {
    if ( !this.verify(key) ) this.values.push(new MyInput(key));
  }

  setValue(key: string, value: string) {
    if ( this.verify(key) )
      this.values[this.getIndex(key) as number].set(value);
  }
  
  getValue( key: string ): string {
    if ( this.verify(key) )
      return this.values[this.getIndex(key) as number].get();
    
    else return ''
  }
}