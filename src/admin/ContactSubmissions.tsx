import React, { useState, useEffect } from 'react';
import { Mail, Eye, Trash2, Clock, CheckCircle, X, Phone, MessageSquare } from 'lucide-react';
import { adminAPI, ContactSubmission } from '../api/adminApi';

const ContactSubmissions: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('');

  useEffect(() => {
    fetchSubmissions();
  }, [currentPage, statusFilter]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getContactSubmissions(currentPage, 10, statusFilter || undefined);
      setSubmissions(response.submissions);
      setTotalPages(response.pagination.totalPages);
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (id: number) => {
    try {
      const submission = await adminAPI.getContactSubmissionById(id);
      setSelectedSubmission(submission);
      setShowDetailsModal(true);
    } catch (error) {
      console.error('Error fetching submission details:', error);
    }
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      await adminAPI.updateContactSubmissionStatus(id, status);
      fetchSubmissions();
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this contact submission?')) {
      try {
        await adminAPI.deleteContactSubmission(id);
        fetchSubmissions();
        if (selectedSubmission && selectedSubmission.id === id) {
          setShowDetailsModal(false);
          setSelectedSubmission(null);
        }
      } catch (error) {
        console.error('Error deleting submission:', error);
        alert('Failed to delete submission');
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return <Mail className="w-4 h-4" />;
      case 'in progress': return <Clock className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      case 'closed': return <X className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Submissions</h1>
          <p className="text-gray-600">Manage customer inquiries and support requests</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Statuses</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Card Interest
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{submission.fullName}</div>
                      <div className="text-sm text-gray-500">{submission.email}</div>
                      {submission.phoneNumber && (
                        <div className="text-sm text-gray-500">{submission.phoneNumber}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">{submission.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {submission.cardTypeOfInterest || 'General Inquiry'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                      {getStatusIcon(submission.status)}
                      <span className="ml-1">{submission.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(submission.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleViewDetails(submission.id)}
                      className="text-green-600 hover:text-green-900 inline-flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(submission.id)}
                      className="text-red-600 hover:text-red-900 inline-flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {submissions.length === 0 && (
          <div className="text-center py-12">
            <Mail className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No contact submissions found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <nav className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-900">Contact Submission Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-24">Name:</span>
                      <span className="text-gray-900">{selectedSubmission.fullName}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="font-medium text-gray-700 w-20">Email:</span>
                      <a href={`mailto:${selectedSubmission.email}`} className="text-blue-600 hover:underline">
                        {selectedSubmission.email}
                      </a>
                    </div>
                    {selectedSubmission.phoneNumber && (
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-700 w-20">Phone:</span>
                        <a href={`tel:${selectedSubmission.phoneNumber}`} className="text-blue-600 hover:underline">
                          {selectedSubmission.phoneNumber}
                        </a>
                      </div>
                    )}
                    {selectedSubmission.cardTypeOfInterest && (
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 w-24">Card Interest:</span>
                        <span className="text-gray-900">{selectedSubmission.cardTypeOfInterest}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject and Message */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Inquiry Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-900">{selectedSubmission.subject}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-900 whitespace-pre-wrap">{selectedSubmission.message}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status and Dates */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Status Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-24">Status:</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedSubmission.status)}`}>
                        {getStatusIcon(selectedSubmission.status)}
                        <span className="ml-1">{selectedSubmission.status}</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-24">Submitted:</span>
                      <span className="text-gray-900">{new Date(selectedSubmission.createdAt).toLocaleString()}</span>
                    </div>
                    {selectedSubmission.updatedAt && (
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 w-24">Updated:</span>
                        <span className="text-gray-900">{new Date(selectedSubmission.updatedAt).toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, 'In Progress')}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Mark as In Progress
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, 'Resolved')}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Mark as Resolved
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, 'Closed')}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleDelete(selectedSubmission.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;
