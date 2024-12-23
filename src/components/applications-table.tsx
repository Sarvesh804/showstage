import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "./ui/dropdown-menu";

interface Application {
  id: number;
  title: string;
  role: string;
  location: string;
  dateApplied: string;
  status: string;
}



const statusStyles: Record<string, string> = {
  Selected: "bg-green-50 text-green-700 border border-green-200",
  Shortlisted: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  "Pending Review": "bg-orange-50 text-orange-700 border border-orange-200",
  "Not Selected": "bg-red-50 text-red-700 border border-red-200",
  "To be Filled": "bg-gray-50 text-gray-700 border border-gray-200",
  "Continue filling": "bg-sky-50 text-sky-700 border border-sky-200",
  "Important": "bg-indigo-100 text-indigo-700 border border-indigo-200",
};

// List of available statuses for randomness
const availableStatuses = Object.keys(statusStyles);

const dummyApplications: Application[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Dance Troupe for Corporate event ${i + 1}`,
  role: i % 2 === 0 ? "Actor" : (i % 3 === 0 ? "Dancer" : "Singer"),
  location: "Gurgaon, Haryana",
  dateApplied: new Date().toLocaleDateString(),
  status:
    i < 12
      ? "Shortlisted"
      : i < 35
      ? "Selected"
      : availableStatuses[Math.floor(Math.random() * availableStatuses.length)],
}));


export default function ApplicationsTable() {
  const [tab, setTab] = useState("All Applications");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const filteredApplications = dummyApplications.filter((app) => {
    if (tab === "All Applications") return true;
    if (tab === "Invites") return app.status === "To be Filled";
    if (tab === "Drafts") return app.status === "Continue filling";
    if (tab === "Submitted") return app.status === "Shortlisted" || app.status === "Pending Review";
    if (tab === "Auditions") return app.status === "Shortlisted";
    if (tab === "Archived") return app.status === "Important";
    return false;
  });

  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rounded-xl bg-white shadow-sm col-span-3">
      <div className="border-b p-4">
        <div className="flex gap-2 overflow-x-auto">
          {["All Applications", "Invites", "Drafts", "Submitted", "Auditions", "Archived"].map((tabName) => (
            <Button
              key={tabName}
              variant={tab === tabName ? "default" : "ghost"}
              className={
                tab === tabName
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "whitespace-nowrap"
              }
              onClick={() => {
                setTab(tabName);
                setCurrentPage(1);
              }}
            >
              {tabName}
            </Button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Job Title & Role</TableHead>
              <TableHead className="font-medium">Location</TableHead>
              <TableHead className="font-medium">Date Applied</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="w-[52px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedApplications.map((app) => (
              <TableRow key={app.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{app.title}</div>
                    <div className="text-sm text-gray-500">Role: {app.role}</div>
                  </div>
                </TableCell>
                <TableCell>{app.location}</TableCell>
                <TableCell>{app.dateApplied}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      statusStyles[app.status as keyof typeof statusStyles]
                    }`}
                  >
                    {app.status}
                  </span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => console.log("Viewing details of", app.id)}>
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => app.status = "Important" }>
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between px-4 py-4 border-t">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex gap-1">
          {Array.from({
            length: Math.ceil(filteredApplications.length / itemsPerPage),
          }).map((_, i) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              className={currentPage === i + 1 ? "bg-indigo-600 text-white border-indigo-600" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredApplications.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(filteredApplications.length / itemsPerPage)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
