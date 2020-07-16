import Component from '../component';
import './modal.css';

export default class Modal extends Component {
  constructor(parent, props) {
    super(parent, props, 'modal');

    this.$modalTitle = this.$.querySelector('.modal-title');
    this.$modalContent = this.$.querySelector('.modal-content');
    this.$modalSubmitBtn = this.$.querySelector('.modal-submit-btn');

    this.$modalCloseBtn = this.$.querySelector('.modal-closer');
    this.$modalCloseBtn.addEventListener('click', this.close.bind(this));
  }

  mount(element) {
    super.mount(element);
  }

  show() {
    this.$.style.display = 'block';
  }

  close() {
    this.$.style.display = 'none';
  }

  setTitle(value) {
    this.$modalTitle.innerText = value;
  }

  setContent(value) {
    this.$modalContent.innerHTML = value;
  }

  setBtnName(value) {
    this.$modalSubmitBtn.innerText = value;
  }

  render() {
    return `
    <div class="modal-container">
        <div class="modal-header">
            <div class="modal-title"></div>
            <button class="modal-closer">X</button>
        </div>
        <div class="modal-content"></div>
        <div class="modal-footer">
            <button class="modal-submit-btn"></button>
        </div>
    </div>
    <div class="modal-bg"></div>
        `;
  }
}
