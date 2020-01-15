import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  canvas;
  context;
  lastPos;
  send;
  blank;
  constructor() {}
  setCanvas(data) {
    this.canvas = data.canvas;
    this.context = data.context;
    this.lastPos = data.lastPos;
    this.send = data.send;
  }
  findPosition(pos) {
    const rect = this.canvas.getBoundingClientRect(); // va chercher la position relative et la taille de l'élément par rapport à sa zone d'affichage
    pos.x = ((pos.x - rect.left) / (rect.right - rect.left)) * this.canvas.width; // récupère la position exacte de la souris en X
    pos.y = ((pos.y - rect.top) / (rect.bottom - rect.top)) * this.canvas.height; // idem en Y
    return pos;
  }
  mousePosition(event) {
    return this.findPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }
  touchPosition(event) {
    return this.findPosition({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  }
  draw(pos1, pos2) {
    this.context.lineJoin = 'round';
    this.context.moveTo(pos1.x, pos1.y); // point de départ
    this.context.lineTo(pos2.x, pos2.y); // point d'arrivée
    this.context.lineWidth = 3;
    this.context.stroke();
  }
  start(pos) {
    this.lastPos = pos;
  }
  stop(pos) {
    if (this.lastPos) {
      // si lastpos n'est pas null, on dessine et on arrête pour finir le dessin
      this.draw(this.lastPos, pos);
      this.lastPos = null; // on a fini de dessiner, évite de lier le dernier tracé à un nouveau tracé
    }
  }
  move(pos) {
    if (this.lastPos) {
      const newPos = pos;
      this.draw(this.lastPos, newPos);
      this.lastPos = newPos; // relie la dernière pos avec la nouvelle pour signifier le mouvement
    }
  }
  clear() {
    this.canvas.width = this.canvas.width;
  }
  checkData(canvas) {
    this.send.disabled = this.storageCanvas(canvas);
  }
  storageCanvas(canvas) {
    this.blank = document.createElement('canvas');
    this.blank.width = canvas.width;
    this.blank.height = canvas.height;
    if (canvas.toDataURL() === this.blank.toDataURL()) {
      return { isOk: true, url: '' };
    } else {
      return { isOk: false, url: canvas.toDataURL() };
    }
  }

  mouseDown(event) {
    if (event.buttons === 1) {
      this.start(this.mousePosition(event));
    }
  }
  mouseUp(event) {
    this.stop(this.mousePosition(event));
    this.checkData(this.canvas);
  }
  mouseMove(event) {
    this.move(this.mousePosition(event));
  }
  mouseLeave(event) {
    this.stop(this.mousePosition(event));
  }
  mouseEnter(event) {
    if (event.buttons === 1) {
      this.start(this.mousePosition(event));
    }
  }
  touchStart(event) {
    event.preventDefault();
    if (event.touches.length > 0) {
      this.start(this.touchPosition(event));
    }
  }
  touchEnd(event) {
    event.preventDefault();
    if (event.touches.length > 0) {
      this.stop(this.touchPosition(event));
    }
    this.checkData(this.canvas);
  }
  touchMove(event) {
    event.preventDefault();
    if (event.touches.length > 0) {
      this.move(this.touchPosition(event));
    }
  }
}
