# 🟦 ShiftTalk

**A white-labeled React Native mobile app built on top of Rocket.Chat, tailored specifically for warehouse and industrial teams.**

## 🎯 Core Objectives

✅ **Provide a clean, secure messaging experience** for shift-based teams  
✅ **Empower supervisors** to broadcast instructions and updates (highlighted in red)  
✅ **Keep the platform lightweight** by leveraging Rocket.Chat's existing infrastructure  
✅ **Make the app feel like a fully custom product** via white-labeling  

## 👥 User Roles

### **Supervisor**
- Messages show in **red bubbles** to stand out
- Can broadcast important updates, shift changes, or announcements
- Full administrative capabilities

### **Worker**
- Regular message bubbles
- Can chat in rooms but sees supervisor messages emphasized
- Simplified interface focused on communication

## 🚀 Features

- **Role-based messaging** with visual distinction for supervisor messages
- **Dark mode** enforced across the entire application
- **Secure communication** built on Rocket.Chat's proven infrastructure
- **White-labeled design** for seamless brand integration
- **Real-time messaging** with push notifications
- **File sharing** and media support
- **Threaded conversations** for organized discussions

## 📱 Technical Stack

- **Framework**: React Native
- **Backend**: Rocket.Chat server
- **Database**: WatermelonDB (local) + MongoDB (server)
- **State Management**: Redux
- **Navigation**: React Navigation
- **UI**: Custom components with dark theme

## 🛠️ Development

### Prerequisites
- Node.js 16+
- React Native development environment
- Rocket.Chat server instance

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ShiftTalk

# Install dependencies
npm install

# iOS
cd ios && pod install && cd ..

# Run the app
npm run ios     # for iOS
npm run android # for Android
```

### Environment Setup
1. Configure your Rocket.Chat server URL
2. Set up white-label branding (logos, colors, app name)
3. Configure push notifications
4. Set up admin roles and permissions

## 🎨 Customization

### White-labeling
- App icons and splash screens
- Brand colors and themes
- App name and bundle identifiers
- Custom fonts and styling

### Role Configuration
- Define supervisor roles in Rocket.Chat
- Configure message highlighting rules
- Set up broadcast permissions

## 📋 Requirements

- **Supported server versions**: 0.70.0+
- **Supported iOS versions**: 13.4+
- **Supported Android versions**: 6.0+

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:
- Code style and standards
- Pull request process
- Issue reporting
- Development setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Rocket.Chat Mobile Docs](https://developer.rocket.chat/docs/mobile-app)
- **Community**: [#react-native](https://open.rocket.chat/channel/react-native) on [open.rocket.chat](https://open.rocket.chat)
- **Issues**: [GitHub Issues](https://github.com/RocketChat/Rocket.Chat.ReactNative/issues)

---

**Built with ❤️ for warehouse and industrial teams**
