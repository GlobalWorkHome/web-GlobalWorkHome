"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import { Button } from "../../ui/ButtonPro"
import { Textarea } from "../../ui/Textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/Table"

export default function Messaging() {
  const t = useTranslations("company.messaging")
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [reply, setReply] = useState("")

  useEffect(() => {
    // Fetch messages
    // This is where you'd typically make an API call
    setMessages([
      { id: 1, from: "John Doe", subject: "Application Follow-up", date: "2023-05-15", read: false },
      { id: 2, from: "Jane Smith", subject: "Interview Scheduling", date: "2023-05-14", read: true },
      { id: 3, from: "Bob Johnson", subject: "Thank You", date: "2023-05-13", read: true },
    ])
  }, [])

  const handleMessageSelect = (message) => {
    setSelectedMessage(message)
    // Mark message as read
    setMessages(messages.map((m) => (m.id === message.id ? { ...m, read: true } : m)))
  }

  const handleReply = () => {
    console.log(`Replying to message ${selectedMessage.id}: ${reply}`)
    setReply("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("inbox")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("from")}</TableHead>
                  <TableHead>{t("subject")}</TableHead>
                  <TableHead>{t("date")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((message) => (
                  <TableRow key={message.id} onClick={() => handleMessageSelect(message)} className="cursor-pointer">
                    <TableCell>{message.from}</TableCell>
                    <TableCell>{message.subject}</TableCell>
                    <TableCell>{message.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{selectedMessage ? t("messageDetails") : t("selectMessage")}</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {t("from")}: {selectedMessage.from}
                  </h2>
                  <p>
                    {t("subject")}: {selectedMessage.subject}
                  </p>
                  <p>
                    {t("date")}: {selectedMessage.date}
                  </p>
                </div>
                <Textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder={t("replyPlaceholder")}
                  rows={6}
                />
                <Button onClick={handleReply}>{t("send")}</Button>
              </div>
            ) : (
              <p>{t("noMessageSelected")}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

