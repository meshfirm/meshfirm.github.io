# Slack Integration Features

## Overview

The Sindre Slack integration brings AI-powered productivity directly into your Slack workspace. Chat with Sindre in threads, create tasks and documents with slash commands, capture insights from messages, and search your entire Sindre workspace - all without leaving Slack.

## Key Features

### AI Conversations
- **Thread-based Chat**: Mention @Sindre in any channel or DM to start a conversation. Sindre responds in threads to keep channels organized.
- **Context Memory**: Sindre remembers conversation context within threads, allowing for natural back-and-forth discussions.
- **Workspace Awareness**: Sindre can reference your tasks, documents, and insights when answering questions.

### Slash Commands
- `/sindre create task` - Opens a modal to create a new task with title, description, and optional due date
- `/sindre create document` - Opens a modal to create a new document
- `/sindre create insight` - Opens a modal to capture a new insight
- `/sindre search [query]` - Opens a modal to search your Sindre workspace semantically

### Message Capture
- **Emoji Reactions**: React to any message with a designated emoji (e.g., ✅ for tasks, 💡 for insights) to capture it in Sindre
- **Message Shortcuts**: Use Slack's message shortcuts menu to capture messages as tasks or insights
- **Bulk Capture**: Select multiple messages in a thread to capture them together

### Task Management
- **Complete Tasks**: Mark tasks as complete directly from Slack notifications
- **Edit Tasks**: Update task details without leaving Slack
- **Add Comments**: Comment on tasks from Slack
- **View Task Details**: Get full task context with a click

### Semantic Search
- **Global Search**: Search across all your Sindre content from within Slack
- **Modal Interface**: Clean search interface with filters for content type
- **Rich Results**: Preview results directly in Slack with links to full content

### Link Unfurling
- **Rich Previews**: Share Sindre URLs in Slack and see rich previews with key information
- **Quick Actions**: Unfurled links include action buttons for common operations
- **Supported Content**: Tasks, documents, insights, and meeting notes all unfurl with relevant details

### Home Tab
- **Personalized Dashboard**: View your tasks, recent activity, and quick actions in Slack's Home tab
- **Today's Tasks**: See what's due today at a glance
- **Quick Create**: Create new items without leaving the Home tab

### Notifications
- **Task Updates**: Get notified when tasks you're involved with are updated
- **Mentions**: Receive notifications when you're mentioned in Sindre
- **Weekly Summaries**: Optional weekly digest of your activity and upcoming items
- **Customizable**: Control which notifications you receive and where

## Setup Instructions

1. **Sign in to Sindre**: Go to [app.sindre.ai/signup](https://app.sindre.ai/signup) and sign in or create an account
2. **Connect Slack**: Navigate to Settings → Integrations, find Slack, and click "Connect"
3. **Authorize**: Select your Slack workspace and authorize Sindre
4. **Configure**: Set your notification preferences and default channels
5. **Start Using**: Try `/sindre` in any Slack channel to get started

## Permissions Required

The Sindre Slack app requests the following permissions:
- **Read messages**: To capture messages when you use shortcuts or reactions
- **Write messages**: To respond to mentions and send notifications
- **Use slash commands**: To enable `/sindre` commands
- **Access user info**: To personalize your experience
- **Unfurl links**: To show rich previews of Sindre URLs

## Security Notes

- Sindre only reads messages when explicitly triggered (via @mention, slash command, shortcut, or reaction)
- All data is encrypted in transit and at rest
- Sindre uses OAuth 2.0 for secure authentication
- Workspace admins can revoke access at any time from Slack's app management
- Sindre respects Slack's channel permissions - it can only access channels it's been added to
