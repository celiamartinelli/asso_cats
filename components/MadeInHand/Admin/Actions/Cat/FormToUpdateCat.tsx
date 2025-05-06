export default function FormToUpdateCat() {
  return (
    <div>
      <h1>Update Cat Information</h1>
      <form>
        <div>
          <label htmlFor="catName">Name:</label>
          <input
            type="text"
            id="catName"
            name="catName"
            defaultValue="Current Cat Name"
          />
        </div>
        <div>
          <label htmlFor="catAge">Age:</label>
          <input
            type="number"
            id="catAge"
            name="catAge"
            defaultValue="Current Cat Age"
          />
        </div>
        <div>
          <label htmlFor="catBreed">Breed:</label>
          <input
            type="text"
            id="catBreed"
            name="catBreed"
            defaultValue="Current Cat Breed"
          />
        </div>
        <div>
          <label htmlFor="catDescription">Description:</label>
          <textarea
            id="catDescription"
            name="catDescription"
            defaultValue="Current Cat Description"
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
