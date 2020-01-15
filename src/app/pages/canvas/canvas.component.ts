import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CanvasService } from '../../core/services/canvas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  canvas;
  send;
  context;
  lastPos;
  imageUrl;
  canvasForm: FormGroup;
  @Output() sessionStorageSign$ = new EventEmitter<string>();
  constructor(private canvasService: CanvasService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.canvas = document.getElementById('canvas');
    this.send = document.getElementById('send');
    this.context = this.canvas.getContext('2d');
    this.lastPos = null;
    this.canvasService.setCanvas({ canvas: this.canvas, context: this.context, lastPos: this.lastPos, send: this.send });
    this.canvasService.context.strokeStyle = '#000000';
    this.canvas.width = 500;
    this.canvas.height = document.getElementById('canvasContainer').offsetHeight;
    this.startListeners();
    this.initForm();
  }
  initForm() {
    this.canvasForm = this.formBuilder.group({
      image: ['', [Validators.required]],
    });
  }
  startListeners() {
    this.redraw();
    this.mouseEvent();
    this.touchEvent();
    // Check de la signature
    window.addEventListener('click', () => this.checkData(this.canvas));
  }
  redraw() {
    document.getElementById('clear').addEventListener('click', () => this.canvasService.clear());
  }
  mouseEvent() {
    this.canvasService.canvas.addEventListener('mousedown', event => this.canvasService.mouseDown(event));
    this.canvasService.canvas.addEventListener('mouseup', event => this.canvasService.mouseUp(event));
    this.canvasService.canvas.addEventListener('mousemove', event => this.canvasService.mouseMove(event));
    this.canvasService.canvas.addEventListener('mouseleave', event => this.canvasService.mouseLeave(event));
    this.canvasService.canvas.addEventListener('mouseenter', event => this.canvasService.mouseEnter(event));
  }
  touchEvent() {
    this.canvasService.canvas.addEventListener('touchstart', event => this.canvasService.touchStart(event));
    this.canvasService.canvas.addEventListener('touchend', event => this.canvasService.touchEnd(event));
    this.canvasService.canvas.addEventListener('touchmove', event => this.canvasService.touchMove(event));
  }
  checkData(canvas) {
    const check = this.canvasService.storageCanvas(canvas);
    if (check.isOk) {
      this.send.disabled = true;
      this.imageUrl = check.url;
    } else {
      this.send.disabled = false;
      this.imageUrl = check.url;
    }
  }
  onSubmit() {
    sessionStorage.setItem('signature', this.canvasForm.value.image);
    if (sessionStorage.getItem('signature')) {
      this.sessionStorageSign$.emit(sessionStorage.getItem('signature'));
    }
  }
}
