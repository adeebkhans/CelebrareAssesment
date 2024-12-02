# **Canvas for Celebrare**

An interactive and dynamic text editor web application built with modern tools like React, Tailwind CSS, and Vite. It allows users to add, edit, and style text effortlessly with draggable functionality and customizable formatting.

---

## **Features**

- 🎨 **Rich Text Formatting**  
  Customize text with bold, italic, underline, font family, size, and alignment.

- 🕹️ **Drag-and-Drop Text**  
  Move text elements around the canvas using an intuitive drag-and-drop interface.

- 🔄 **Undo/Redo Functionality**  
  Track and manage text state changes seamlessly using a robust undo/redo mechanism.

- ⚡ **Responsive Design**  
  Styled with Tailwind CSS for a consistent user experience across devices.

- 🚀 **Built for Performance**  
  Developed with Vite for fast builds and efficient development workflows.

---

## **Tech Stack**

| Technology       | Purpose                     |
|-------------------|-----------------------------|
| **React**        | Component-based UI          |
| **Tailwind CSS** | Responsive styling          |
| **Vite**         | Fast development and builds |
| **Lucide Icons** | Interactive icons           |

---

## **Setup and Installation**

### Prerequisites:
- [Node.js](https://nodejs.org/) (v16+)
- npm or yarn package manager

### Steps to Install:
1. Clone the repository:
   ```bash
   git clone https://github.com/adeebkhans/CelebrareAssesment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CelebrareAssesment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be accessible at `http://localhost:5173`.

---

## **Project Structure**

```
src/
│
├── components/
│   ├── TextEditor/
│   │   ├── TextEditorToolbar.jsx
│   │   ├── TextStyleControls.jsx
│   │   ├── DraggableText.jsx
│   │   └── index.jsx
│
├── hooks/
│   ├── useTextHistory.js
│   ├── useTextStyles.js
│   └── useDraggable.js
│
└── App.js
```


## **How to Use**

1. Enter your text in the input field.
2. Drag the text anywhere on the canvas.
3. Customize your text:
   - **Font Family**: Select from the dropdown in the navbar.
   - **Font Size**: Adjust in the bottom toolbar.
   - **Text Styles**: Apply bold, italic, underline, or alignment options.
4. Undo or redo changes using the respective buttons in the navbar.

---


## **Contributing**

We welcome contributions! Here's how you can help:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---
