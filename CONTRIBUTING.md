# Contributing to QR Attendance System

First off, thank you for considering contributing to QR Attendance System! It's people like you that make this tool better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots if relevant**
- **Include your environment details** (OS, Node.js version, browser)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Provide specific examples to demonstrate the use case**
- **Describe the current behavior and explain the expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Follow the JavaScript/Node.js style guide
- Include thoughtful comments in your code
- End all files with a newline
- Write clear, descriptive commit messages
- Update documentation for any changed functionality

## Development Process

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** in a new git branch
4. **Test your changes**: Ensure the application runs without errors
5. **Commit your changes** using descriptive commit messages
6. **Push to your fork** and submit a pull request

## Code Style Guidelines

### JavaScript

- Use ES6+ syntax where appropriate
- Use `const` and `let` instead of `var`
- Use async/await instead of callbacks
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable and function names

### HTML/CSS

- Use semantic HTML5 elements
- Keep CSS organized and use meaningful class names
- Ensure responsive design works on all screen sizes
- Test on multiple browsers

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line

Example:
```
Add CSV export with custom date range

- Implement date range picker in UI
- Add backend endpoint for filtered export
- Update documentation

Fixes #123
```

## Project Structure

```
qr-attendance-system/
├── server.js           # Main backend server
├── public/             # Frontend files
│   └── index.html      # Web interface
├── package.json        # Dependencies
├── README.md           # Documentation
├── QUICK_START.md      # Quick start guide
└── .gitignore          # Git ignore rules
```

## Testing

Currently, the project uses manual testing. If you're adding new features:

1. Test all existing functionality still works
2. Test your new feature thoroughly
3. Test on different browsers (Chrome, Firefox, Safari, Edge)
4. Test responsive design on mobile devices

## Feature Requests

We love feature requests! Here are some areas we're particularly interested in:

- Database integration (PostgreSQL, MongoDB, MySQL)
- User authentication and authorization
- Mobile app development
- Email notifications
- Analytics and reporting dashboards
- Multi-language support
- Accessibility improvements
- Performance optimizations

## Questions?

Feel free to open an issue with the `question` label if you have any questions about contributing!

## Recognition

Contributors will be recognized in our README.md file. Thank you for making this project better!
