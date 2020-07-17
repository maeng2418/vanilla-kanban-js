import Modal from 'Components/Modal/modal';
import 'Components/Modal/modal.css';
import { parseNoteText } from '@/utils';

export default class NoteModal extends Modal {
  constructor() {
    super();

    this.content = `
      <label for="note" class="label-note-content">
        Note
      </label>
      <textarea name="note" class="new-note"></textarea>
    `;

    this
      .setTitle('Edit note')
      .setContent(this.content)
      .setBtnName('Save note');

    this.$modalSubmitBtn = this.$.querySelector('.modal-submit-btn');
    this.$newNote = this.$.querySelector('.new-note');

    this.$modalSubmitBtn.addEventListener('click', this.submit.bind(this));
  }

  setNewNote(value) {
    this.$newNote.value = value;
    return this;
  }

  open() {
    super.open();
    const { title, content } = this.$attach;
    this.setNewNote(`${title}\n${content}`);
    return this;
  }

  submit() {
    const { title, content } = parseNoteText(this.$newNote.value);
    this.$attach
      .setTitle(title)
      .setContent(content);
    this
      .setNewNote('')
      .close();
    return this;
  }
}