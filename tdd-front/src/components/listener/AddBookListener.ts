export default interface AddBookListener {
    addBookEvent(): Promise<void>;
}