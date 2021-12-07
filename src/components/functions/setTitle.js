//this helps us to add custom title to website tab
export default function setTitle(title) {
    if (typeof title !== "string") {
       throw new Error("Title should be an string");
    }
    document.title = title;
  }